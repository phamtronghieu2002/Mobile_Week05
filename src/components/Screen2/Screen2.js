import { View, Text, Image, Button, Pressable } from "react-native-web"
import styles from "./Styles"
import { useEffect, useState } from "react"
import black from "..//..//assets//BTH3//black.png"
import white from "..//..//assets//BTH3//white.png"
import blue from "..//..//assets//BTH3//blue.png"
import red from "..//..//assets//BTH3//red.png"
 

const DATA =[
    {
        background:'red',
        text:'đỏ',
        price:' 1.790.000 đ',
        img:red
    },
    {
            background:'#C5F1FB',
            text:'trắng',
            price:' 1.890.000 đ',
            img:white
    },{

        background:'blue',
        text:'xanh',
        price:' 1.990.000 đ',
        img:blue
        
    },
    {

        background:'black',
        text:'đen',
        price:' 5.890.000 đ',
        img:black
        
    }
]


const Screen2 = ({ navigation, route }) => {

    const [data, setData] = useState(null)

    useEffect(() => {

        setData(route.params)

    }, [])
  console.log(data)

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Image
                    source={data && data.img}
                    style={{
                        width: 112,
                        height: 132
                    }}
                />

                <View style={styles.infor}>
                    <Text style={styles.textInfor}>
                    Điện Thoại Vsmart Joy 3F ~{"\n"} 
                        Hàng chính hãng
                    </Text>
                    <Text style={styles.textInfor}>
                      màu: <Text style={{fontWeight:'bold'}}>{data && data.text}</Text>
                    </Text>
                    <Text style={styles.textInfor}>
                      cung cấp bởi: <Text style={{fontWeight:'bold'}}>Tiki Trending</Text>
                    </Text>

                    <Text style={styles.price}>
                        {data && data.price}
                    </Text>


                </View>
            </View>
                        <View style={styles.content}>
                        <Text>chọn một màu bên dưới</Text>
                        {
                            DATA.map((data)=>
                            <Pressable
                            onPress={()=>{setData(data)}}
                            style={{width:80,height:80,backgroundColor:data.background}}
                            >


                            </Pressable>
                            )
                        }

                            <Button
                            title="xong"
                            onPress={()=>{

                                navigation.navigate('Screen1', data)
                            }}
                            />
                        </View>

        </View>
    )



}

export default Screen2;