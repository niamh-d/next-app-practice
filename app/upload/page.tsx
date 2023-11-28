"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const uWStyles = {
  palette: {
    window: "#F5F5F5",
    sourceBg: "#FFFFFF",
    windowBorder: "#90a0b3",
    tabIcon: "#0094c7",
    inactiveTabIcon: "#69778A",
    menuIcons: "#0094C7",
    link: "#53ad9d",
    action: "#8F5DA5",
    inProgress: "#0194c7",
    complete: "#53ad9d",
    error: "#c43737",
    textDark: "#000000",
    textLight: "#FFFFFF",
  },
  fonts: {
    default: null,
    "'Fira Sans', sans-serif": {
      url: "https://fonts.googleapis.com/css?family=Fira+Sans",
      active: true,
    },
  },
};

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="Aerial Image of Tallinn, Estonia"
        />
      )}
      <CldUploadWidget
        uploadPreset="jdimrdn3"
        options={{
          sources: ["local", "url", "camera", "google_drive"],
          cropping: true,
          multiple: false,
          maxFiles: 5,
          styles: uWStyles,
        }}
        onUpload={(result) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
