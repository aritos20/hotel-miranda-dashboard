import styled from 'styled-components';

const KpiContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
	padding-top: 50px;
`

const ReviewsBigContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
    background-color: white;
    padding: 25px;
    border-radius: 12px;
`

const ReviewsContainer = styled.div`
    display: flex;
    gap: 40px;
`

const Title = styled.p`
    font-family: var(--font-poppins);
    color: #393939;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
`

export {
    KpiContainer,
    ReviewsBigContainer,
    ReviewsContainer,
    Title,
}