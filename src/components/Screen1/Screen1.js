import { View, Text, Image, Button, Pressable } from "react-native-web"
import styles from "./Styles"
import blueIMG from '..//..//assets//BTH3//blue.png'
import iconhoicham from '..//..//assets//BTH3//iconhoicham.png'
import vectorIMG from '..//..//assets//BTH3//Vector.png'
import { useEffect, useState } from "react"
import StarRating from 'react-native-star-rating-widget';

const Screen1 = ({ navigation, route }) => {


    const [rating, setRating] = useState(5);


    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.thumb}
                source={route && route.params ? route.params.img : blueIMG}
            />

            <View style={styles.infor}>
                <Text
                    style={styles.name}
                >
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>

                <View style={styles.rating}>
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        starSize={20}
                    />
                    <Text
                        style={styles.danhgia}
                    >
                        (Xem 828 đánh giá)
                    </Text>

                </View>

                <View style={styles.wpPrice}>
                    <Text
                        style={styles.newPrice}
                    >
                        {

                            route && route.params ? route.params.price : '1.790.000 đ'
                        }
                    </Text>
                    <Text
                        style={styles.oldPrice}
                    >
                        {

                            route && route.params ? route.params.price : '1.790.000 đ'
                        }
                    </Text>

                </View >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}
                >
                    <Text style={{
                        color: '#FA0000',
                        fontSize: 12,
                        fontWeight: 700,


                    }}>
                        Ở ĐÂU RẺ HƠN HOÀN TIỀN
                    </Text>
                    <Image source={iconhoicham} style={{ width: 20, height: 20 }} />
                </View>



                <Pressable
                    style={styles.wpSelectColor}
                    onPress={() =>
                        navigation.navigate('Screen2', route && route.params ? route.params : { img: blueIMG, text: 'đỏ', price: ' 1.790.000 đ' })
                    }
                >
                    <Text
                        style={{ textAlign: 'center' }}
                    >
                        4 MÀU-CHỌN MÀU
                    </Text>

                    <Image
                        source={vectorIMG}
                        style={{
                            width: 12,
                            height: 14,
                            position: 'absolute',
                            right: 10,

                        }}
                    />

                </Pressable>
                <Pressable style={styles.buttonAction}>
                    <Text style={styles.textBtn}>Chon Mua</Text>
                </Pressable>
            </View>
        </View>


    )
}

export default Screen1