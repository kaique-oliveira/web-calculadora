import styled from "styled-components";

export const Container = styled.div`
  width: 393px;
  height: 652px;

  background-color: ${({ theme }) => theme.COLORS.DEFAULT};
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 8px;

  transition: all 0.2s;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  height: 472px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 22px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 32px;
`;

export const GroupButtonsDefault = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
`;

export const GroupButtonsThreeColumns = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 16px;
`;

export const RowsGroupButtons = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 1.5fr 1.5fr;
  grid-template-columns: 3fr;
`;

export const ColumnsGroupButtons = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 3fr 0.5fr;

  gap: 16px;
`;

export const WrapperPronpt = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;

  & > button:hover {
    background-color: transparent !important;
  }

  & > input {
    width: 95%;
    border: none;
    box-shadow: none;
    outline: none;
    background-color: transparent;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 28px;
    font-weight: 700;
  }
`;

export const History = styled.div`
  height: 32px;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0px 32px;
  gap: 8px;

  span {
    font-size: 22px;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;
