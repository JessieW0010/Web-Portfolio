import React from 'react';
import config from '/config';

export default function ContactMe() {
  return (
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contact Me!</h2>
          <p>
            Interested in talking? Feel free to reach out to me through email,
            LinkedIn, or follow me on Github!
          </p>
        </header>
        <ul className="actions stacked">
          {config.socialLinks.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
