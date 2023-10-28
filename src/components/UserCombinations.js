import {useEffect, useRef, useState} from "react";
import axios from "axios";
import canvasConfetti from 'canvas-confetti';

function UserCombinations() {
    const listUrl = process.env.REACT_APP_API_URL + "/user-combinations";
    const [data, setData] = useState([]);
    const canvasRef = useRef(null);

    const handleConfetti = () => {
        const canvas = canvasRef.current;

        if (canvas) {
            const ctx = canvas.getContext('2d');

            canvasConfetti({
                particleCount: 500,
                spread: 200,
                colors: ['#ff0000', '#00ff00', '#0000ff'],
            });

            setTimeout(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }, 5000);
        }
    };

    const refreshButtonClick = () => {
        load_user_combinations().then(
            () => {
                handleConfetti();
            }
        );
    }

    const load_user_combinations = async () => {
        try {
            const response = await axios.get(listUrl);
            if (response.status !== 200) {
                throw new Error();
            }
            setData(response.data);
        } catch (error) {
            let message = "Session time out! Log in to the system again!";
            alert(message);
        }
    }

    return (
        <>
            <canvas className="position-relative" ref={canvasRef} width={0} height={0} />
            <div className="container">
                <div className="row justify-content-center align-items-center mt-5 mb-5">
                    <div className="col-md-10">
                        <h1 className="mb-5">Welcome to java intensive happy pair generator!</h1>
                        <button className="btn btn-lg btn-outline-success w-50 mb-3"
                                onClick={refreshButtonClick}>Re-generate
                        </button>
                        {(data.length === 0) && (
                            <>
                                <h3>Click on the button above to generate our happy pairs!</h3>
                            </>
                        )}
                        {(data.length !== 0) && (
                            <>
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-borderless ">
                                        <thead>
                                        <tr>
                                            <th scope="col">Pair number</th>
                                            <th scope="col">First person</th>
                                            <th scope="col">Second person</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((element, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{element.firstUser.name} {element.firstUser.secondName}
                                                    <small><code>({element.firstUser.team.name})</code></small></td>
                                                <td>{element.secondUser.name} {element.secondUser.secondName}
                                                    <small><code>({element.secondUser.team.name})</code></small></td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCombinations;