import { Box, Flex, Select, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import LOGO from '../resorce/LOGO.jpg'
import powerdby from "../resorce/Powredby.png"
import logo2 from '../resorce/logo2.png'
import pic from '../resorce/pic.png'
import dropA from '../resorce/dropA.png'
import notification from '../resorce/notification.png'
import frame1 from '../resorce/frame1.png'
import frame2 from '../resorce/frame2.png'
import frame3 from '../resorce/frame3.png'
import frame4 from '../resorce/frame4.png'
import topp from '../resorce/pie top.png'
import table from '../resorce/table.png'
import ChartComponent from '../Components/Chart'
import DoughnutChart from '../Components/Doughnut Chart'
import th from "../resorce/th.png"
import { Table } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'

const Mains = () => {
    return (
        <Flex width={'100%'} h={'100vh'}>
           <Navbar/>
            <Flex flexDirection={'column'} w={'100%'}>
                <Flex mt={20} ml={'50px'} justifyContent={'space-between'} flexWrap={'wrap'} width={'100%'} >
                    <Box >
                        <Flex alignItems={'center'}>
                            <img src={logo2} alt="logo2" />
                            <Text ml={20} fontWeight={'bold'}>Category-1</Text>
                        </Flex>

                    </Box>
                    <Box >
                        <Flex alignItems={'center'} gap={10} mr={60}>
                            <img src={pic} alt="pic" />
                            <img ml={20} src={dropA} alt='dropa' />
                            <img ml={20} src={notification} alt='not' />
                        </Flex>

                    </Box>
                </Flex>

                <Select ml={'85%'} mt={30} size={'xl'} justifyItems={'flex-end'} border={'1px solid #02AB6C '} borderRadius={'10'}>
                    <option value='option3'>Show Tline: Jan23-Feb23</option>
                    <option value='option3'>Show Tline: Feb23-Mar23</option>
                    <option value='option1'>Show Tline: Mar23-Apr23</option>
                    <option value='option2'>Show Tline: Apr23-May23</option>
                    <option value='option3'>Show Tline: May23-Jun23</option>
                    <option value='option3'>Show Tline: Jun23-Jul23</option>
                    <option value='option3'>Show Tline: Jul23-Aug23</option>
                    <option value='option3'>Show Tline: Aug23-Sep23</option>
                    <option value='option3'>Show Tline: Sep23-Oct23</option>
                    <option value='option3'>Show Tline: Oct23-Nov23</option>
                    <option value='option3'>Show Tline: Npv23-Dec23</option>
                </Select>
                <Flex width={"1005px"}>
                    <img src={frame1} alt="frame1" />
                    <img src={frame2} alt="frame1" />
                    <img src={frame3} alt="frame1" />
                    <img src={frame4} alt="frame1" />

                </Flex>
                <Box
                    style={{
                        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px", width: "1005px",
                        height: "auto",
                        // top: "87px",
                        right: "26px",
                        borderRadius: "12px",
                        border: "1px"
                    }}>
                    <ChartComponent />

                </Box>
                <Flex>
                    <Flex flexDirection={'column'}>
                        <img src={topp} alt="" style={{ marginTop: "30px", marginBottom: "-40px" }} />
                        <DoughnutChart />
                    </Flex>
                    <Box
                        style={{
                            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px", width: "auto",
                            height: "700px",
                            // top: "87px",
                            right: "26px",
                            borderRadius: "12px",
                            border: "1px"
                        }}>
                        <img src={th} alt="" style={{ marginBottom: "-210px", marginLeft: "80px" }} />
                        <img src={table} alt="" />
                    </Box>
                </Flex>
            </Flex>



        </Flex>
    )
}

export default Mains