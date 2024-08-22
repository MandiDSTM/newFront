import { useContext, useEffect } from "react";
import { AuthContext } from "../AutContext/AutContex";
import axios from "axios";

const Miner = ({ param }) => {
    const { username, userId, admin, minerHandle } = useContext(AuthContext);

    useEffect(() => {
        const fetchMinerData = async () => {
            try {
                const result = await minerHandle();
                console.log('Result:', result);

                const showMinerTable = async (minerNumber) => {
                    const response = await axios.post('http://localhost:3000/minertable', { minerNumber });
                    console.log('Miner table data:', response.data);
                    return response.data;
                };

                switch (param) {
                    case 1:
                        console.log('Condition is true for param 1:', result[0]);
                        showMinerTable(result[0]);
                        break;
                    case 2:
                        console.log('Condition is true for param 2:', result[1]);
                        showMinerTable(result[1]);
                        break;
                    case 3:
                        console.log('Condition is true for param 3:', result[2]);
                        showMinerTable(result[2]);
                        break;
                    case 4:
                        console.log('Condition is true for param 4:', result[3]);
                        showMinerTable(result[3]);
                        break;
                    case 5:
                        console.log('Condition is true for param 5:', result[4]);
                        showMinerTable(result[4]);
                        break;
                    case 6:
                        console.log('Condition is true for param 6:', result[5]);
                        showMinerTable(result[5]);
                        break;
                    default:
                        console.log('Param out of range:', param);
                }
            } catch (error) {
                console.error('Error fetching miner data:', error);
            }
        };

        fetchMinerData();
    }, [param, minerHandle]);

    return (
        <div className="flex justify-center text-xl m-2 flex-col">
            <p>{param}</p>
            <p>Your ID is {userId}</p>
            <p>Username is {username}</p>
            <p>Your state is {admin?.toString()}</p>
        </div>
    );
}

export default Miner;
