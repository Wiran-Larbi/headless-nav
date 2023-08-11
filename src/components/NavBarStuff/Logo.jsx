import LogoPhone from '../../../public/images/logo-phone.png';
import LogoLarge from '../../../public/images/logo-1.png';


export function Logo() {


    return (
        <>
            <div className="flex flex-shrink-0 items-center">
                <img
                    className="h-20 w-auto"
                    src={LogoLarge}
                    alt="IpTrackit"
                />
            </div>
        </>
    )
}