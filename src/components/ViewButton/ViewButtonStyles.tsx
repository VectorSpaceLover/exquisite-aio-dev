// import css from 'styled-jsx/css';

const style = `
.viewButton {
  padding-bottom: 10px;
  width: fit-content;
  color: var(--white);
  opacity: 0.75;
  border-bottom: 1px solid rgba(white, 0.75);

  &:hover {
    opacity: 1;
  }

  &::after {
    content: url("/images/arrow.svg");
    margin-left: 8px;
    width: 15px;
    height: 8px;
  }
}
`
export default style