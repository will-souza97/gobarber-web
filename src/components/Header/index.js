import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-barber.svg';
import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2018%2F04%2F18%2F18%2F56%2Fuser-3331257__340.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fpt%2Fvectors%2Fsearch%2Fuser%2F&tbnid=WN1ZVDaSPGIKeM&vet=12ahUKEwjMyL2Q9I3uAhVyBdQKHZNoBPsQMygDegUIARCtAQ..i&docid=Ozj0x4om2fudIM&w=604&h=340&q=imagem%20user&client=ubuntu&ved=2ahUKEwjMyL2Q9I3uAhVyBdQKHZNoBPsQMygDegUIARCtAQ'
              }
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
