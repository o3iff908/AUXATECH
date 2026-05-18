import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useHoverEffects from "../../hooks/useHoverEffects";

interface DataType {
    id?: number;
    activeClass?: string;
    icon?: string;
    subTitle?: string;
    title?: string;
    text?: string;
    listData?: string[];
    illustration?: string;
}

const SingleServiceV2 = ({ service }: { service: DataType }) => {

    const { id, icon, subTitle, title, text, listData, illustration } = service;

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.body.classList.contains("dark"));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.body, { attributes: true });

        return () => observer.disconnect();
    }, []);

    const { activeIndex, hoveredIndex, handleMouseEnter, handleMouseLeave, handleMouseMove, handleMouseLeaveWrapper } = useHoverEffects();

    return (
        <li
            className={`hover-active-item ${activeIndex === hoveredIndex ? 'active' : ''}`}
            onMouseEnter={() => id && handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave} // Call without index
        >
            <Link
                to={`/service-details/${id ?? 0}`}
                className="service-hover-item"
                onMouseMove={(e) => id && handleMouseMove(e, id)}
                onMouseLeave={() => id && handleMouseLeaveWrapper(id)}
            >
                <div className="service-hover-content">
                    <div className="left">
                        <div className="icon">
                            <img
                                src={
                                    icon
                                    ?isDark
                                        ? `/assets/img/icon/${icon?.replace('.png', '-dark.png')}`
                                        : `/assets/img/icon/${icon}`
                                    : "/assets/img/icon/default.png"
                                }
                                alt="Icon"
                                width={145}
                                height={160}
                            />                       
                        </div>
                        <div className="item-title">
                            <span>{subTitle}</span>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className="details">
                        <p>{text}</p>
                        <ul className="list-style-five">
                            {listData?.map((data, index) => (
                                <li key={index}>{data}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="arrow">
                        <strong className="btn-arrow-xl">
                            <i className="fas fa-long-arrow-right" />
                        </strong>
                    </div>
                </div>

                <div className={`service-hover-wrapper service-hover-wrapper-${id}`}
                    style={{ opacity: 0, position: "absolute", transition: "opacity 0.3s" }}>
                    <img
                        className="service-hover-placeholder"
                        src={`/assets/img/illustration/${illustration}`}
                        width={450}
                        height={450}
                        alt="Image Not Found"
                    />
                </div>
            </Link>
        </li>
    );
};

export default SingleServiceV2;



