import { Button } from "./RoundButton.style";

const RoundButton = ({children, variant}:any) => {
    return (
        <Button href="#" variant={variant}>
            {children}
        </Button>
    );
}

export default RoundButton;