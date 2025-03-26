import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p>
            En réalité je suis simplement moi, <span className="orange">Samuel Launay</span> pour etre éxact.
            <br />
            <br />
            Actuellement je suis développeur <span className="blue">Support GLPI PHP/MyAdmin</span> chez <span className="purple">Tecl</span><span className="lime">ib'</span> à Caen, où je travaille sur <span className="blue">GLPI</span> et ses plugins.
            <br />
            <br />
            Je m'occupe donc de plusieurs tâches à ce poste, comme par exemple de la résolution de <span className="mytasks yellow">Bugs</span>, l'ajout de <span className="purple">nouvelles fonctionnalités</span> mais aussi du <span className="purple">support de niveau 3</span> pour les clients.
            <br />
            <span className="whisper">On peut dire que j'ai plusieurs cordes à mon arc 🏹😂</span>
            <br />
            <br />
            En dehors du développement, je suis fais pas mal de choses !
            <br />
        </p>
        <span className="whisper">
            👀 Et si tu veux en savoir plus sur ce que je vais en dehors du développement,
            <br />
            je t'invite à aller voir ici <ImPointRight /> <a href="##">link</a>
        </span>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
