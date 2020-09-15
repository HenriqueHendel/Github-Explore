import React from 'react';

import {FiChevronRight} from 'react-icons/fi';
import {Title, Form, Repositories} from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = ()=>{
    return(
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars3.githubusercontent.com/u/62394977?s=460&u=10eabfd14f3ed07ae1a193beafb9e780d208e30e&v=4" alt="Henrique Hendel"/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scable ReactJs & React Native form!</p>
                    </div>

                    <FiChevronRight  size={20} />
                </a>

                <a href="teste">
                    <img src="https://avatars3.githubusercontent.com/u/62394977?s=460&u=10eabfd14f3ed07ae1a193beafb9e780d208e30e&v=4" alt="Henrique Hendel"/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scable ReactJs & React Native form!</p>
                    </div>

                    <FiChevronRight  size={20} />
                </a>

                <a href="teste">
                    <img src="https://avatars3.githubusercontent.com/u/62394977?s=460&u=10eabfd14f3ed07ae1a193beafb9e780d208e30e&v=4" alt="Henrique Hendel"/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scable ReactJs & React Native form!</p>
                    </div>

                    <FiChevronRight  size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;