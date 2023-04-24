

const Balloon = ({ posX, posY }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${posX}px`,
        top: `${posY}px`,
        width: "50px",
        height: "70px",
        backgroundColor: "#ff4d4d",
        borderRadius: "50% 50% 40% 40%",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        transform: "rotate(-25deg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "50%",
          width: "14px",
          height: "20px",
          backgroundColor: "#ff6666",
          transform: "translateX(-50%) rotate(45deg)",
          borderTopLeftRadius: "50% 60%",
          borderTopRightRadius: "50% 60%",
        }}
      ></div>
    </div>
  );
};

export default Balloon;
