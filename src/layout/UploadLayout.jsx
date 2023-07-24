import Header from '../components/Header';

// eslint-disable-next-line react/prop-types
function UploadLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default UploadLayout;
