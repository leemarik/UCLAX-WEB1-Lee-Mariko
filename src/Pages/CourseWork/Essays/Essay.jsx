import styled from "styled-components";

const Essay = ({ question, children }) => {
    return (
        <EssayStyled className="Essay">
            <h3>{question}</h3>
            <div className="answer">{children}</div>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div`
    margin: 20px 0px;
    border: solid 2px #3b768f;

    h3 {
        background-color: #3b768f;
        padding: 10px 20px;
        color: whitesmoke;
        font-size: 20px;
        margin: 0px;
    }

    .answer {
        background-color: #eee;
        padding: 20px;
    }
`;
