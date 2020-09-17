/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';

import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import api from '../../services/api';

import {Header, RepositoryInfo, Issues} from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

interface RepositoryData {
    full_name:string;
    description: string;
    owner : {
        login: string;
        avatar_url: string;
    }
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = ()=>{
    const [repositoryInfo, setRepositoryInfo] = useState<RepositoryData | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
    const {params} = useRouteMatch<RepositoryParams>();
    
    useEffect(()=>{
        api.get(`repos/${params.repository}`).then( response => {
            setRepositoryInfo(response.data);
        });

        api.get(`repos/${params.repository}/issues`).then( response => {
            setIssues(response.data);
        });

    }, [params.repository]);

    return(
    <>
        <Header>
            <img src={logoImg} alt="Github Explorer" />
            <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>

        {repositoryInfo && (
            <RepositoryInfo>
            <header>
                <img src={repositoryInfo.owner.avatar_url} alt={repositoryInfo.owner.login}/>
                <div>
                    <strong>{repositoryInfo.full_name}</strong>
                    <p>{repositoryInfo.description}</p>
                </div>
            </header>

            <ul>
                <li>
                    <strong>{repositoryInfo.stargazers_count}</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>{repositoryInfo.forks_count}</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>{repositoryInfo.open_issues_count}</strong>
                    <span>Issues</span>
                </li>
            </ul>
            </RepositoryInfo>
        )}

        

    <Issues>
        {issues.map((issue)=>(
            <a target="_blank" key={issue.id} href={issue.html_url}>
                <div>
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                </div>

                <FiChevronRight  size={20} />
            </a>
        ))}
    </Issues>
    </>
    );
}

export default Repository;