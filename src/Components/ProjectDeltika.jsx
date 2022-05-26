import React from 'react';
import { Heading } from '@chakra-ui/react';

export default function ProjectDeltika() {
  return (
    <div className='projectFrame'>
      <div data-aos='fade-right' className='projectInfo'>
        <Heading size='lg' className='mb-1'>
          Deltika Product
        </Heading>
        <div className='skills'>
          <button className='skill btn-secondary btn-sm'>React</button>
          <button className='skill btn-secondary btn-sm'>react-router</button>
          <button className='skill btn-secondary btn-sm'>Mapbox</button>
          <button className='skill btn-secondary btn-sm'>Python</button>
          <button className='skill btn-secondary btn-sm'>PostgreSql</button>
        </div>
        <div>
          <p>
            Deltika uses explainable AI analytics that translates your data into proactive insights. Currently focused
            on US real estate market.
          </p>
          <p>Site includes complex database queries, dynamic map and more.</p>
          <p className='note'>
            <b>Note:</b> Site it targeted for desktop to prioritize speed and not showing well on small screens.
          </p>
        </div>
        <div className='buttonStyle'>
          <a target='_blank' href='https://app.deltika.com/'>
            See Live
          </a>
        </div>
      </div>
      <div data-aos='fade-left' className='projectView'>
        <iframe
          width='100%'
          height='315'
          src='https://www.youtube.com/embed/cXqHgyv9TFc?rel=0&modestbranding=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1'
          frameborder='0'
          allowfullscreen='true'
        ></iframe>
      </div>
    </div>
  );
}
