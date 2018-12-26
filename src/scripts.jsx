
import logo from './images/logo.png';
import MicBlend from './images/MicBlend.png';
import Emotions from './images/Emotions.png';
import Customizing from './images/Customizing.png';
import MultiLingual from './images/MultiLingual.png';
import APISummary from '@material-ui/icons/Person';

const sections = [
    {
        title: 'API 개요',
        icon: APISummary,
    },
    {
        title: '다운로드',
        icon: APISummary,
    },
    {
        title: '가격정책',
        icon: APISummary,
    },
    {
        title: '지원 및 문의',
        icon: APISummary,
    },
    ]
  
const prices = [
    {
        title: 'Basic',
        price: '99.99 won',
        description: '여기에 설명이 들어갑니다 어쩌구 저쩌구',
    },
    {
        title: 'Pro',
        price: '3,599,998 won',
        description: '여기에 설명이 들어갑니다 어쩌구 저쩌구',
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

export {sections, prices, APIfeatures};

