// import css from 'styled-jsx/css';

const style = `
.header {
  background-color: var(--black);

  &__logo {
    display: flex;
    width: 56px;

    @media (min-width: 768px) {
      width: 78px;
    }
  }

  &__link, &__icon, &__gitlab-button {
    display: flex;
  }

  &__link, &__icon {
    padding: 10px;
  }

  &__link {
    opacity: 75%;

    &:hover {
      opacity: 100%;
    }
  }

  &__last-link {
    @media (min-width: 769px) {
      margin-right: 28px;
    }
  }

  &__icon {
    opacity: 25%;

    &:hover {
      opacity: 100%;
    }
  }

  &__last-icon {
    @media (min-width: 769px) {
      margin-right: 12px;
    }
  }

  &__gitlab-button {
    padding: 8px 16px;
    gap: 10px;
    background-color: #161616;
    opacity: 75%;

    &:hover {
      opacity: 100%;
    }
  }
}
`
export default style