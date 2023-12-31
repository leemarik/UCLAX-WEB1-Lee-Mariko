import styled from "styled-components";

/* Components -----------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
import StaffList from "./StaffList";

const Staff = () => {
    return (
        <StaffStyled className="Staff">
            <Inset>
                <Inset>
                    <h1>Staff</h1>
                    <StaffList />
                </Inset>
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div``;
