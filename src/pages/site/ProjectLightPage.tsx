import LayoutV1 from '../../components/layouts/LayoutV1';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import PortfolioV2 from '../../components/portfolio/PortfolioV2';
import { Helmet } from 'react-helmet-async';
import ThemeLight from '../../components/switcher/ThemeLight';

const ProjectLightPage = () => {
    return (
        <>
            <Helmet>
                <title>AUXA TECH - Our Projects</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='Our Projects' />
                <PortfolioV2 moreBtn={true} sectionClass='default-padding-bottom' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default ProjectLightPage;