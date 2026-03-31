import { Link } from "react-router-dom";

interface DataType {
    id: number;
    title: string;
    subtitle: string;
    trial: string;
    price: number;
    currency: string;
    suitability: string;
    features: string[];
}

interface PriceProps {
    activeServiceId: any;
    plan: DataType
}

const SinglePriceV1 = ({ plan, activeServiceId }: PriceProps) => {
    const { title, subtitle, trial, currency, price, suitability, features } = plan || {};

    return (
        <>

            <div className={`pricing-style-one ${activeServiceId === plan.id ? 'active' : ''}`}>
                <div className="left">
                    <div className="info">
                        <h4>{title}</h4>
                        <p className="subtitle">{subtitle}</p>
                        <span>{trial}</span>
                    </div>
                    
                    <h2>
                        <span className="price-label">Starting from</span><br />
                        <sup>{currency}</sup>{price}
                    </h2>
                    <Link className={`btn btn-sm circle effect ${activeServiceId === plan.id ? 'btn-gradient' : 'btn-light'}`} to="/contact-us">Order Now</Link>
                </div>
                <div className="right">
                    <h5>{suitability}</h5>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV1;