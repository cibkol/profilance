import "./styles.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addApprovedNews,
  addNotApprovedNews,
  deleteApprovedNews,
  deleteNotApprovedNews,
} from "./slice/index.reducer";

const emptyForm = {
  title: "",
  text: "",
  date: "",
  id: 0,
};

export default function NewsPage() {
  const { approvedNews, notApprovedNews } = useSelector((state) => state.news);
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [isViewNotApprovedNews, setIsViewNotApprovedNews] = useState(false);
  const [isViewCreateNewsForm, setIsViewCreateNewsForm] = useState(false);
  const [createNewsForm, setCreateNewsForm] = useState(emptyForm);
  const [filterNews, setFilterNews] = useState("");

  const createNews = () => {
    dispatch(addNotApprovedNews({ ...createNewsForm, id: +new Date() }));
    setCreateNewsForm(emptyForm);
    alert("Новость отправленна, она будет отображаться после проверки админом");
  };

  const viewNewsHandler = () => {
    setIsViewNotApprovedNews(!isViewNotApprovedNews);
  };

  const handleChangeFilter = (e) => {
    setFilterNews(e.target.value);
  };

  const handleChangeNewNews = (e) => {
    setCreateNewsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const viewCreateNewsFormHandler = () => {
    setIsViewCreateNewsForm(!isViewCreateNewsForm);
  };

  useEffect(() => {
    setIsViewNotApprovedNews(false);
    setIsViewCreateNewsForm(false);
  }, [user.role]);

  return (
    <div className="news-page">
      <h1 className="title">Новости</h1>
      <div className="news-input-block">
        <span>Поиск</span>
        <input name="filter" value={filterNews} onChange={handleChangeFilter} />
      </div>
      {user.role === 1 && (
        <button onClick={viewCreateNewsFormHandler} className="news-page-btn">
          Предложить новость
        </button>
      )}
      {user.role === 2 && (
        <button className="news-page-btn" onClick={viewNewsHandler}>
          {isViewNotApprovedNews
            ? "Посмотреть одобренные новости"
            : "Посмотреть предложенные новости"}
        </button>
      )}
      {isViewCreateNewsForm && (
        <div>
          <div className="news-input-block">
            <span>Название новсти</span>
            <input
              name="title"
              onChange={handleChangeNewNews}
              value={createNewsForm.title}
            />
          </div>
          <div className="news-input-block">
            <span>Текст новсти</span>
            <input
              name="text"
              onChange={handleChangeNewNews}
              value={createNewsForm.text}
            />
          </div>
          <div className="news-input-block">
            <span>Дата новсти</span>
            <input
              name="date"
              onChange={handleChangeNewNews}
              value={createNewsForm.date}
            />
          </div>
          <button onClick={createNews} className="news-page-btn">
            Отправить новость в предложенные
          </button>
        </div>
      )}
      <div className="news">
        {isViewNotApprovedNews
          ? !!filterNews
            ? notApprovedNews
                .filter((news) =>
                  news.title.toUpperCase().includes(filterNews.toUpperCase())
                )
                .map((news) => (
                  <div className="news-item" key={news.id}>
                    <span className="news-item__title">{news.title}</span>
                    <p className="news-item__text">{news.text}</p>
                    <span className="news-item__date">{news.date}</span>
                    <div className="news-item__buttons">
                      <button
                        onClick={() => dispatch(addApprovedNews(news))}
                        className="news-page-btn"
                      >
                        Одобрить новоcть
                      </button>
                      <button
                        onClick={() => dispatch(deleteNotApprovedNews(news))}
                        className="news-page-btn"
                      >
                        Удалить новоcть
                      </button>
                    </div>
                  </div>
                ))
            : notApprovedNews.map((news) => (
                <div className="news-item" key={news.id}>
                  <span className="news-item__title">{news.title}</span>
                  <p className="news-item__text">{news.text}</p>
                  <span className="news-item__date">{news.date}</span>
                  <div className="news-item__buttons">
                    <button
                      onClick={() => dispatch(addApprovedNews(news))}
                      className="news-page-btn"
                    >
                      Одобрить новоcть
                    </button>
                    <button
                      onClick={() => dispatch(deleteNotApprovedNews(news))}
                      className="news-page-btn"
                    >
                      Удалить новоcть
                    </button>
                  </div>
                </div>
              ))
          : !!filterNews
          ? approvedNews
              .filter((news) =>
                news.title.toUpperCase().includes(filterNews.toUpperCase())
              )
              .map((news) => (
                <div className="news-item" key={news.id}>
                  <span className="news-item__title">{news.title}</span>
                  <p className="news-item__text">{news.text}</p>
                  <span className="news-item__date">{news.date}</span>
                  {user.role === 2 && (
                    <div className="news-item__buttons">
                      <button
                        onClick={() => dispatch(deleteApprovedNews(news))}
                        className="news-page-btn"
                      >
                        Удалить новоcть
                      </button>
                    </div>
                  )}
                </div>
              ))
          : approvedNews.map((news) => (
              <div className="news-item" key={news.id}>
                <span className="news-item__title">{news.title}</span>
                <p className="news-item__text">{news.text}</p>
                <span className="news-item__date">{news.date}</span>
                {user.role === 2 && (
                  <div className="news-item__buttons">
                    <button
                      onClick={() => dispatch(deleteApprovedNews(news))}
                      className="news-page-btn"
                    >
                      Удалить новоcть
                    </button>
                  </div>
                )}
              </div>
            ))}
      </div>
    </div>
  );
}
