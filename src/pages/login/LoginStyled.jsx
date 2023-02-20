import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
`

const MainLoginContainer = styled.div`
    width: 700px;
    height: 600px;
    margin: 0 auto;
    margin-bottom: 200px;
    border-radius: 12px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 13px 3px 40px #00000005;

    .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        margin-bottom: 18px;

        div {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        p {
            width: 60%;
            margin: 0 auto;
            font-family: var(--font-poppins);
            font-size: 18px;
            text-align: center;
        }
    }
`

const InputLogin = styled.input`
    display: block;
    width: 50%;
    padding: 12px;
    margin: 0 auto;
    border-radius: 12px;
    margin-bottom: 24px;
    outline: none;
    background-color: #f8f8f8;
`

const ButtonLogin = styled.button`
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 12px;
    border-radius: 12px;
    font-family: 'var(--font-poppins)';
    font-size: '18px';
    cursor: pointer;

    &:hover {
      background-color: #135846;
      color: #FFFFFF;
      transition: 0.3s;
    }

`

export {
    MainContainer,
    MainLoginContainer,
    InputLogin,
    ButtonLogin
}