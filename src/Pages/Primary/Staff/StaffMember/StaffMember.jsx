import styled from "styled-components";

/* eReact Zoom :: 3rd Party Library -----------------------------*/
import Zoom from "react-img-zoom";

/* Components -----------------------------*/
import StaffBio from "./StaffBio";

const StaffMember = ({ member }) => {
    return (
        <StaffMemberStyled className="StaffMember">
            <div className="clipper">
                <Zoom
                    img={member.image}
                    zoomScale={3}
                    width={311}
                    height={414}
                />
            </div>
            <h3>{member.name}</h3>
            <StaffBio member={member} />
        </StaffMemberStyled>
    );
};

export default StaffMember;

const StaffMemberStyled = styled.div`
    background-color: #eee;

    img {
        width: 100%;
        display: block;
    }

    .clipper {
        overflow: hidden;
    }

    h3 {
        font-size: 20px;
        color: white;
        background-color: #3b768f;
        margin: 0px;
        padding: 5px 10px;
    }
`;
