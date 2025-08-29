import { useEffect, useState } from 'react';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@heroui/react';
import { getAssetUrl } from '../../utils/getAssetUrl';

import './AppStoreButtons.css';
import { XMarkIcon } from '@heroicons/react/16/solid';

const AppStoreButtons = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePopoverOpen = () => {
    console.log('open');
    setIsOpen(true);
  };

  const handlePopoverClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => setIsOpen((prev) => !prev), 6000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="app-store-buttons">
      <Button
        radius="sm"
        className="play-store-btn"
        onPress={() => {
          window.open(
            'https://play.google.com/store/apps/details?id=com.severino&hl=pt_BR',
            '_blank',
          );
        }}
      >
        <img src={getAssetUrl('/svg/play_store.svg')} alt="Play Store" />
      </Button>

      <Popover
        placement="top-start"
        shadow="none"
        className="dark"
        radius="sm"
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        shouldCloseOnBlur={false}
        triggerScaleOnOpen={false}
      >
        <PopoverTrigger>
          <Button
            radius="sm"
            className="app-store-btn"
            onPress={() => {
              handlePopoverOpen();
            }}
          >
            <img src={getAssetUrl('/svg/app_store.svg')} alt="App Store" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <span className="soon-label">
            Em breve
            <Button
              isIconOnly
              radius="full"
              className="newsletter--popover-content-close"
              endContent={<XMarkIcon className="w-4 h-4" color="#FFF" />}
              onPress={handlePopoverClose}
            />
          </span>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AppStoreButtons;
