"use client";
import Image from "next/image";

interface ModalProps {
  img: string;
}

export function Modal({ img }: ModalProps) {
  return (
    <div className="lg:w-80 lg:h-64">
      <div className="">
        <Image
          src={img}
          alt={""}
          layout="responsive"
          className="h-full w-full rounded-t-md"
        ></Image>
      </div>
      <button
        className="w-full py-2 lg:py-3 rounded-br-md rounded-bl-md bg-slate-50 text-sky-600 border-t-2 font-semibold border-orange-400 ease-in duration-300 hover:text-orange-400"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Saiba Mais!
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
