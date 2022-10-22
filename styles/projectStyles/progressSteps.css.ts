import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 30px;
  max-width: 100%;
  width: 350px;
  
  &::before {
    content: '';
    background-color: #e0e0e0;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }
`

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const Progress = styled.div<{ widthPercent: string }>`
  background-color: #3498db;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: ${({widthPercent}) => widthPercent};
  z-index: -1;
  transition: 0.4s ease;
`

export const Circle = styled.div<{ isActive: boolean }>`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  border: 3px solid #e0e0e0;
  border-color: ${({ isActive }) => (isActive ? '#3498db' : '#e0e0e0')};
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;
`

export const StyledButton = styled.button<{ isActive: boolean }>`
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
  transform: ${({ isActive }) => (isActive ? 'scale(0.98)' : 'scale(1)')};
  
  &:focus {
    outline: 0;
  }
  
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`