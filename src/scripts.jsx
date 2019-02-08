import Emotions from './images/Emotions.png';
import Customizing from './images/Customizing.png';
import MultiLingual from './images/MultiLingual.png';
import CashIcon from '@material-ui/icons/MonetizationOn';
import DownloadIcon from '@material-ui/icons/Archive';
import QuestionIcon from '@material-ui/icons/ContactSupport';
import MusicIcon from '@material-ui/icons/LibraryMusic';


const sections = [
    {
        title: 'API 개요',
        icon: MusicIcon,
    },
    {
        title: '다운로드',
        icon: DownloadIcon,
    },
    {
        title: '가격정책',
        icon: CashIcon,
    },
    {
        title: '지원 및 문의',
        icon: QuestionIcon,
    },
]

const prices = [
    {
        title: 'Basic',
        price: '99.99',
        description: '여기에 설명이 들어갑니다 어쩌구 저쩌구 여기에 설명이 들어갑니다 어쩌구 저쩌구 여기에 설명이 들어갑니다 어쩌구 저쩌구 여기에 설명이 들어갑니다 어쩌구 저쩌구',
    },
    {
        title: 'Pro',
        price: '3,599,998',
        description: '여기에 설명이 들어갑니다 어쩌구 저쩌구 여기에 설명이 들어갑니다 어쩌구 저쩌구 여기에 설명이 들어갑니다 어쩌구 저쩌구 여기에 설명이 들어갑니다 어쩌구 저쩌구 ',
    }
]

const APIfeatures = [
    {
        title: '감정조절',
        description1: 'Prosody TTS는 무뚝뚝한 기계음이 아닌,',
        description2: '디테일한 감정까지 목소리에 담아냅니다.',
        description3: '행복한, 화난, 슬픈, 침착한 목소리 등의',
        description4: '다양한 감정을 담아 개성있게 쓸 수 있습니다.',
        image: Emotions,
    },
    {
        title: '커스터마이징',
        description1: 'Prosody TTS는 같은 문구라도 사람들처럼',
        description2: '다양한 억양과 톤으로 커스터마이징이 가능합니다.',
        description3: '높은 톤, 낮은 톤, 굴곡을 조절하여',
        description4: 'TTS에 개성을 담을 수 있습니다.',
        image: Customizing,
    },
    {
        title: '다국어 지원',
        description1: 'Prosody TTS는 한 사람의 목소리로',
        description2: '다양한 언어를 말합니다.',
        description3: '하나의 목소리로 세상의 다양한 언어를 말해보세요.',
        description4: '',
        image: MultiLingual,
    }
]

const APImenu = [
    {
        title: 'API 소개',
        link: '/api/about',
        selectedIndex: 0,
    },
    {
        title: '운영정책',
        link: '/api/operation',
        selectedIndex: 1,
    },
    {
        title: 'F&Q',
        link: '/api/f&q',
        selectedIndex: 2,
    },,
]

export { sections, prices, APIfeatures, APImenu };

