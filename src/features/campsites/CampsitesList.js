import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = ({ setCampsiteIdFunctionAsProp }) => {
    const campsites = selectAllCampsites();

    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col 
                    md='5' 
                    className='m-4' 
                    key={campsite.id}
                    onClick={() => setCampsiteIdFunctionAsProp(campsite.id)}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    )
}

export default CampsitesList;