import React from 'react';
import { Icon } from '@iconify/react';
const WhatsappButton = () => {
    return (
        <div className='whatsapp_button'>
            <a href="https://wa.me/7489921599
        " className="float" rel="noreferrer" target="_blank">
              {/* <i className="ri-whatsapp-line"></i> */}
              <Icon icon="ri:whatsapp-line" />
            </a>
        </div>

    )
}

export default WhatsappButton