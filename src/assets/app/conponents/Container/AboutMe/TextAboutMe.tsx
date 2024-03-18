import styled from "styled-components";


export const TextAboutMe = () => {
  return (
    <TextStyle>
      Я являюсь опытным фронтенд-разработчиком с более чем годом практического
      опыта в создании SPA (Single Page Applications) с использованием React,
      Next.js, Redux и TypeScript. Я обладаю навыками проверки и отладки
      пользовательского интерфейса, а также хорошо знаком с процессами
      разработки. Я постоянно совершенствую свои навыки в этой области и
      стремлюсь расширить их с помощью новых технологий, таких как Vue. Я также
      уделяю свободному времени чтение IT-литературы, особенно в области
      JavaScript, CSS, чтобы быть в курсе последних тенденций и передовых
      подходов. Я открыт для новых предложений и готов принять вызовы, связанные
      с разработкой фронтенда. Буду рад принять участие в интересных проектах и
      wвнести свой вклад в их успех.
    </TextStyle>
  );
};
const TextStyle = styled.p`
  max-width: 438px;
  padding: 0 5px;
  color: #f2f2f2;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  align-self: stretch;
`;
