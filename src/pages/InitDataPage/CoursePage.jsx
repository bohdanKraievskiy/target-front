import { Section, Chip, Title, Cell, List, Button, Image, Card, Text, AvatarStack, Avatar, Divider, Placeholder, Subheadline } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { UserContext } from '@/contexts/UserContext';
import { getAllChapters } from '@/Utils/thinkificAPI';
import { PopUp } from '../LaunchParamsPage/PopUp';

import { Icon24Clock, Icon20PlayCircle, Icon16StarAlt , Icon24Message} from '@vkontakte/icons';

/**
 * @returns {JSX.Element}
 */
export function CoursePage() {
  const location = useLocation();
  const course = location.state?.course;
  const [chapters, setChapters] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    const handleGetAllChapters = async () => {
      try {
        const courseList = await getAllChapters(course.id, user.id);
        setChapters(courseList);
      } catch (error) {
        console.error("Не удалось загрузить главы:", error);
      }
    };

    if (!course.my){
    window.Telegram.WebApp.MainButton.text = "Get course";
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.onClick(handleOpenPopUp);}

    handleGetAllChapters();

    return () => {
      // Очистка обработчика события при размонтировании
      window.Telegram.WebApp.MainButton.offClick(handleOpenPopUp);
    };
  }, [course.id, user, navigate]);

  const handleOpenPopUp = () => setPopUpOpen(true);
  const handleClosePopUp = () => {
    // Настройки для MainButton после закрытия попапа
    window.Telegram.WebApp.MainButton.text = "Get course";
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.onClick(handleOpenPopUp);
  
    // Закрытие попапа
    setPopUpOpen(false);
  };
  

  return (
    <div>
      <div style={{ width: "100%", maxWidth: "500px", overflow: "hidden", margin: "0 auto" }}>
        <img
          src="https://i.ibb.co/zmv0JD2/image-2024-11-06-19-37-49.png"
          width="100%"
          height="150px"
          style={{ objectFit: "cover", display: "block" }}
        />
      </div>
  
      <List>
        <Title level="1" weight="2">
          {course.title}
        </Title>
        <Text weight="3">Course</Text>
  
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <Chip mode="mono">Digital</Chip>
          <Chip mode="mono">TON</Chip>
          <Chip mode="mono">Telegram</Chip>
        </div>
  
        {/* If the course belongs to the user, show validity date */}
        {course?.my && (
          <Section яstyle={{marginTop: 8}}>
          <Cell
            before={<Icon24Clock />}
            hint="28.11.2024 15:52"
            subhead="Valid until"
          />
          </Section>
        )}
  
        <Card>
          <Cell multiline subhead="Description" children={course.description} />
        </Card>
  
        {/* Display chapters based on whether the course belongs to the user */}

        <Text weight="1">Chapters</Text>

        {course?.my ? (
          <div>
            <Section style={{ marginTop: 8 }}>
            {chapters.map((chapter, index) => (
            <Cell
            subhead={`Chapter ${index + 1}`}
            multiline={true} 
              subtitle={
                <Button
                  style={{ marginTop: 8 }}
                  before={<Icon20PlayCircle />}
                  size="s"
                  mode="bezeled"
                >
                  Open
                </Button>
              }
            >
              {chapter.name}
            </Cell>
             ))}
             </Section>
          </div>
        ) : (
          <>
          <Section style={{ marginTop: 8 }}>
            {chapters.map((chapter, index) => (
              <div key={index}>
                <Cell
                  subhead={`Chapter ${index + 1}`}
                  children={chapter.name}
                  multiline={true} 
                />
                {/* Render Divider only if it's not the last chapter */}
                {index < chapters.length - 1 && <Divider />}
              </div>
            ))}
          </Section>
        </>
        )}
  
        <Text weight="1">Mentors</Text>
  
        {!course?.my ? (
          <Section style={{ marginTop: 8 }}>
            <Cell
              subtitle="Engage Labs"
              children="Mark Okhman"
              before={<Avatar size={32} src={`https://t.me/i/userpic/320/markokhman.jpg`} />}
              after={<Button style={{borderRadius:"50px"}} after={<Icon16StarAlt/>}>50</Button>}
            />
          </Section>
        ) : (
          <Section style={{marginTop: 8}}>
          <Cell
            hint="Mark Okhman"
            subhead="Engage Labs"
            subtitle={
              <Button
                style={{ marginTop: 8 }}
                before={<Icon24Message />}
                size="s"
                mode="bezeled"
              >
                Contact via Telegram
              </Button>
            }
          />
          </Section>
        )}
  
        {isPopUpOpen && <PopUp course_data={course} onClose={handleClosePopUp} />}
      </List>
    </div>
  );
} 