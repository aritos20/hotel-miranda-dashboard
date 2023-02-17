import styled from 'styled-components';

const TopContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
	padding-top: 50px;
`

const Stats = styled.div`
	background-color: #ffffff;
	width: 22%;
	height: 125px;
	border-radius: 12px;
	display: flex;
	align-items: center;
	gap: 15px;
	box-shadow: 0px 4px 4px #00000005;
`

const Icon = styled.div`
	display: inline-block;
	padding: 15px;
	border-radius: 8px;
	background-color: #Dc9c9e;
	margin-left: 7.5%;

    svg {
        width: 25px;
        height: 20px;
    }
`

const StatsText = styled.ul`
	list-style: none;

	.number {
		font-family: var(--font-poppins);
		font-size: 30px;
		font-weight: 600;
		color: #393939;
	}

	.info-text {
		font-family: var(--font-poppins);
		font-size: 14px;
		font-weight: 300;
		color: #787878;
	}
`

export {
    TopContainer,
    Stats,
    Icon,
    StatsText
}