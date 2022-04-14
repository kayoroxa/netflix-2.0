import Image from 'next/image'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { ContainerLinguagemTransferida } from './styles-linguagem-transferida'

const meses = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

interface IProps {}

const LinguagemTransferida = ({}: IProps) => {
  return (
    <ContainerLinguagemTransferida>
      <div className="head-line">
        <b>Receba o passo-a-passo</b> da estrategia que me fez{' '}
        <span>aprender INGLÊS</span> usando o PORTUGUÊS você vai se impressionar
        com a semelhança.
      </div>
      <div className="subtitle">
        Em até 30 dias você vai perceber que save muito mais inglês do que você
        imagina
        {/* Nesse desafio de até 30 dias você vai descobrir que você já sabe mais
        inglês do que imagina... */}
        {/* Em até 21 dias você vai saber tudo que eu faço para alcançar esses
        resultados, mesmo que esteja saindo do zero. */}
      </div>
      <button>
        <p className="title">GARANTA SEUS RESULTADOS</p>
        <p>
          🔥 Por apenas R$19,90 <br /> ( somente dia {new Date().getDate()} de{' '}
          {meses[new Date().getMonth() + 1]} )
        </p>
      </button>
      <ul className="pros">
        <li>✅ Assista no seu tempo</li>
        <li>✅ Sem precisar sair de casa</li>
        <li>✅ Em qualquer dispositivo</li>
        <li>✅ Acesso por 12 Meses</li>
        <li>✅ Mais de 20 Aulas</li>
        <li>✅ Garantia de 30 dias</li>
        {/* <li>✅ Do Básico ao Avançado</li> */}
      </ul>

      <div className="list-is-not">
        <div className="is">
          <div className="title">
            Esse curso
            <br />
            <span>é para você que...</span>
          </div>
          <div className="list">
            <div className="item">
              <AiFillCheckCircle />
              <span>É iniciante e não entende nada de inglês</span>
            </div>
            <div className="item">
              <AiFillCheckCircle />
              <span>Já tentou aprender mas não conseguiu</span>
            </div>
            <div className="item">
              <AiFillCheckCircle />
              <span>Nunca tentou mas quer começar com pé direito</span>
            </div>
            <div className="item">
              <AiFillCheckCircle />
              <span>Quer aprender inglês de maneira rápida</span>
            </div>
            <div className="item">
              <AiFillCheckCircle />
              <span>
                Quer focar na fala e entender, e não apenas teoria e gramatica
              </span>
            </div>
            <div className="item">
              <AiFillCheckCircle />
              <span>Ainda não se considera bom no inglês</span>
            </div>
            <div className="item">
              <AiFillCheckCircle />
              <span>
                Quer saber toda a semelhança que tem no português e inglês
              </span>
            </div>

            {/* <div className="item">
              <AiFillCheckCircle />
              Quer aprender inglês sem precisar gastar muito dinheiro
            </div>
            <div className="item">
              <AiFillCheckCircle />
              Precisa de um passo a passo, livre de falhas
            </div> */}
          </div>
        </div>

        <div className="not">
          <div className="title">
            Mas,
            <br />
            <span> não é para você que...</span>
          </div>
          <div className="list">
            <div className="item">
              <MdCancel />
              <span>Tem um inglês muito avançado</span>
            </div>
            <div className="item">
              <MdCancel />
              <span>Não quer assistir um curso de inglês na sua casa</span>
            </div>
            <div className="item">
              <MdCancel />
              <span>Não tem internet</span>
            </div>
            <div className="item">
              <MdCancel />
              <span>Está satisfeito em nunca aprender uma nova lingua</span>
            </div>
            <div className="item">
              <MdCancel />
              <span>
                Não está disposto a tirar um pouco de tempo do seu dia para
                praticar
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="garantia">
        <div className="image-container">
          <Image src="/garantia-grande.png" layout="fill" objectFit="contain" />
        </div>
        <div className="description">
          <h2>Confiamos no curso e em você!</h2>
          <p>
            Se em até 7 dias você não ficar satisfeito com o curso, nos mande um
            e-mail e iremos te reembolsar completamente! Sem enganação e
            enrolação, garantia 100%.
          </p>
        </div>
      </div>

      <div className="depositions">
        <div className="title">O QUE ESTÃO FALANDO...</div>
        <div className="images">
          <div className="image-container">
            <Image
              src="/images/depoimentos/depoimento (1).png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="image-container">
            <Image
              src="/images/depoimentos/depoimento (2).png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* <div className="image-container">
            <Image
              src="/images/depoimentos/depoimento (3).png"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
          <div className="image-container">
            <Image
              src="/images/depoimentos/depoimento (4).png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* <div className="image-container">
            <Image
              src="/images/depoimentos/depoimento (5).png"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
        </div>
      </div>

      <div className="politicas">
        <div className="linha">
          <a href="/politicas-privacidade">Políticas de privacidade</a>
          <a href="/termos-de-uso">Termos de uso</a>
        </div>
        <div className="is-not">
          Copyright © 2021 - [NOME SITE] ® 2021 - Todos os Direitos Reservados.
          ESTE SITE NÃO É DO FACEBOOK: Este Site Não Faz Parte Do Site Do
          Facebook Ou Do Facebook Inc. Além Disso, Este Site NÃO É Endossado
          Pelo Facebook De Nenhuma Maneira. FACEBOOK É Uma Marca Comercial
          Independente Da FACEBOOK, Inc. *Os Resultados Variam De Pessoa Para
          Pessoa, Seus Objetivos E Esforço.
        </div>
      </div>
    </ContainerLinguagemTransferida>
  )
}

export default LinguagemTransferida
