import styled from 'styled-components';
//Header
export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;


  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;

    &:first-child{
        margin-left: 25px;
         flex: 1;
    }

    &:last-child{
        text-align: right;
        margin-right: 25px;
        flex: 1;
    }
  }
  
`;

export const DivTopBar = styled.div`


    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;

    @media (min-width: 1280px) {
        width: 1280px;
    }

    div{
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    
    
    }
`;

export const DivTopBarLeft = styled.div`

    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;

    span {
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
    }

`;

export const DivTopBarCenter = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;

    span {
        cursor: pointer;
        margin-right: 5%;

        &:last-child {
            margin-right: 0;
        }
    }

    
    
    span:hover {
        text-decoration: underline;
    }
`;

export const DivTopBarRight = styled.div`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    
    span {
        cursor: pointer;
    }


`;