import { Github, Linkedin, Twitter } from './LogoLinks';

export const Socialbar = (): JSX.Element => {
  return (
    <div className="flex justify-around">
      <Github href="https://github.com/rikas" />
      <Linkedin href="https://www.linkedin.com/in/oterosantos" />
      <Twitter href="https://twitter.com/rikas" />
    </div>
  );
};

export default Socialbar;
