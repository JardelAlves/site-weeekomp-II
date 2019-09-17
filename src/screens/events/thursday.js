import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardSmall from '../../components/cards/cardSmall';
import RegisterModal from '../../components/modal/register-modal'

export default class Thursday extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <Title>Locky's Day</Title>
                <h5 className="center">10/10/19 - Quinta</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardSmall
                                title="Workshop 'Crack Me'"
                                content="O workshop será ministrado de forma que os participantes conheçam os conceitos básicos necessários para solucionar desafios do tipo “crack me”. Não será necessário de conhecimentos prévios de resolução de tais desafios mas é aconselhável ter uma boa base de programação utilizando a linguagem C para melhor entendimento dos problemas a serem resolvidos."
                                imageSrc={require('../../persons/marcus-vinicius.jpg')}
                                buttonLink="#CrackMe" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="CTF - Capture The Flag"
                                content="O CTF da Weekomp desse ano abordará desafios do tipo “crack me” e tem como objetivo apresentar os problemas clássicos relacionados a essa categoria de problemas."
                                imageSrc={require('../../talks/capture-flag.png')}
                                buttonLink="#CTF" buttonName="Inscrever-se"
                            />
                        </div>
                    </div>
                </div>

                <RegisterModal eventId="CrackMe" title="Workshop 'Crack Me'" />
                <RegisterModal eventId="CTF" title="CTF - Capture The Flag" />

                <Divider />
                <Footer />
            </div>
        )
    }
}
