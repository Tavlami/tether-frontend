import { useRouter } from 'next/router';
import Market from '../../components/market';
import Board from '../../components/board';
import Zar1 from '../../components/dice/zar1';
import Zar2 from '../../components/dice/zar2';
import Zar3 from '../../components/dice/zar3';
import Zar4 from '../../components/dice/zar4';
import Zar5 from '../../components/dice/zar5';
import Zar6 from '../../components/dice/zar6';

const Game = () => {
    const router = useRouter();

    return (
        <div className='flex w-12 h-screen justify-content-center align-items-center bg-blue-300'>
            <div className="w-12 flex justify-content-center align-items-center">
                <Market></Market>
            </div>

            <Board></Board>


            <div className='w-12 flex justify-content-center'>
                <div>
                    <div className="flex gap-4 p-4 bg-red-700 m-1 border-round-xl shadow-3" style={{ width: 'max-content' }}>
                        {/* Zar 1 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            
                        </div>

                        {/* Zar 2 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                        </div>

                        {/* Zar 3 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                        </div>

                        {/* Zar 4 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                        </div>

                        {/* Zar 5 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                        </div>

                        {/* Zar 6 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-red-700 m-1 border-round-xl shadow-3" style={{ width: 'max-content' }}>
                        {/* Zar 1 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            
                        </div>

                        {/* Zar 2 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                        </div>

                        {/* Zar 3 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                        </div>

                        {/* Zar 4 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                        </div>

                        {/* Zar 5 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center"></div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                        </div>

                        {/* Zar 6 */}
                        <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                            <div className="col-4 flex justify-content-center align-items-center">
                                <div className="border-2"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>

    );
};

export default Game;