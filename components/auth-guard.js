import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Loading from './loading'

export default function AuthGuard({ children }) {

    const router = useRouter();

    const [isAuthenticated, setIsAuthenticated] = useState();

    useEffect(() => {
        setIsAuthenticated(false);
        setTimeout(() => fetch('/api/admin/check-session', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                if (!response.success) {
                    setIsAuthenticated(false);
                    router.push({
                        pathname: '/admin/login'
                    });
                } else {
                    setIsAuthenticated(true);
                }
            }), 1200);

    }, []);

    return (isAuthenticated ? children : <Loading></Loading>);
}