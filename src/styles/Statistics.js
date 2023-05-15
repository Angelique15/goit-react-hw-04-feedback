import styled from 'styled-components';

export const StyledStatistics = styled.div`
  margin-top: 20px;
  background-color: #F3FEFF;
  border: 2px solid #C2CAE8;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
  border-radius: 5px;
  color: #36567A;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #36567A;
`;

export const Stat = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: #36567A;
`;

export const TotalStat = styled(Stat)`
  font-weight: bold;
  color: #36567A;
`;

export const PercentageStat = styled(Stat)`
  color: ${({ positive }) => (positive ? '#40CACF' : '#E076C5')};
  font-weight: bold;
  padding-top: 20px;
`;
