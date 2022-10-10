import { PanelContainer, PanelHeader } from './Panel.css';

const Panel = ({ background, isActive, handleClick, index, title }) => {
  console.log('isActive', isActive)
  return (
    <PanelContainer
      isActive={isActive}
      onClick={() => handleClick(index)}
      style={{ backgroundImage: `url("${background}")` }}
    >
      <PanelHeader isActive={isActive}>{title}</PanelHeader>
    </PanelContainer>
  );
};

export default Panel;
