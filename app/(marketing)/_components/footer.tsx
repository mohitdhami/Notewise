import { Button } from '@/components/ui/button';
import {Logo} from './logo';

export const Footer = () => {
    return ( 
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <Logo />
        </div>
     );
}
