import * as SC from "./Works.style.ts";
import {Work} from "./Work/Work.tsx";
import social from '../../../../images/social.jpg'
import todo from '../../../../images/todo.jpg'
import team from '../../../../images/my-team.webp'


export const Works = () => {
  return (
    <SC.WorksWrapper id="Projects">
      <SC.WorksTitle>
        MY
        <br /> PROJECTS
      </SC.WorksTitle>
      <Work
        background={`${social}`}
        title={'Friend-Net'}
        recommendation={'Find Peace in Meditation'}
        text={
          'Friend-Net is an innovative social network designed to simplify and enhance communication ' +
          'and interaction among friends. Combining the best features of other popular social' +
          ' platforms, Friend-Net offers a unique and appealing user experience.\n' +
          '\n' +
          'The main goal of Friend-Net is to help you find your friends and maintain close contact ' +
          'with them. You will have access to a wide range of tools for exchanging messages, sharing' +
          ' photos and videos, and organizing events. You can easily find and add friends, create ' +
          'groups based on interests, and keep track of the activity of your contacts.'
        }
      />
      <Work
        background={`${todo}`}
        title={' Action-List'}
        recommendation={'Find Peace in Meditation'}
        text={
          'Action-List - это мощное приложение для управления задачами, которое помогает отдельным ' +
          'пользователям и командам быть организованными, сосредоточенными и продуктивными. ' +
          'Благодаря интуитивному интерфейсу и обширному набору функций, Action-List предоставляет ' +
          'простой и эффективный способ управлять задачами и достигать целей.\n' +
          '\n' +
          'С помощью Action-List вы можете легко создавать и организовывать задачи, устанавливать ' +
          'сроки выполнения и приоритеты, а также назначать задачи участникам команды. Совместные ' +
          'функции позволяют вам делиться списками задач, делегировать ответственность и отслеживать' +
          ' прогресс в режиме реального времени. Будьте в курсе своих задач благодаря напоминаниям ' +
          'и уведомлениям, чтобы ничего не упустить.'
        }
      />
      <Work
        background={`${team}`}
        title={' my-team'}
        recommendation={'Find Peace in Meditation'}
        text={
          'My-Team - это удобное приложение со списком команд, которое предоставляет вам всю ' +
          'необходимую информацию о вашей команде на одной платформе. Независимо от того, ' +
          'являетесь ли вы участником команды или ее руководителем, My-Team поможет вам легко ' +
          'организовать и управлять командными делами.\n' +
          '\n' +
          'В приложении My-Team вы можете увидеть список всех команд, в которых вы состоите или' +
          ' которыми управляете. Каждая команда имеет свой профиль, где вы найдете информацию о ' +
          'членах команды, их контактных данных, ролях и ответственностях.'
        }
      />
    </SC.WorksWrapper>
  );
};
