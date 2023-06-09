import LoginModal from '../root/LoginModal'

export const LoginPrompt = ({ loginPrompt, setLoginPrompt }) => {
    if (loginPrompt) {
        return <LoginModal clicked={loginPrompt} setClicked={setLoginPrompt}/>
    }
}