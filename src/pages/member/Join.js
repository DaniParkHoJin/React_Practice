import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const isLogin = false;
    if (!isLogin) {
        //return <navigator to = "/login" replace={true} />;
        Navigate('/login', { replace: true });
    }

    /**
     * navigate(-1)
     * navigate(+1)
     * 
    */

    return (
        <>
            <Helmet>
                <title>회원가입</title>
            </Helmet>
            <h1>회원가입 페이지...</h1>;
        </>
    );
};

export default Join;