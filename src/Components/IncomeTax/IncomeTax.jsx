import React from "react";
import {Button} from "@mui/material";

export default function IncomeTax() {
  return (
    <>
      <section /**ekamtahark */
        css={{
          display: "block",
          marginRight: "1%",
        }}
      >
        <div>
          <div
            css={{
              width: "40%",
              borderRadius: "12, 0, 0, 0",
              padding:"1%"
            }}
          >
            Եկամտահարկ 20% / ՏՏ 10%
          </div>
          <div
            css={{
              width: "60%",
              borderRadius: "0, 12, 0, 0",
            }}
          >
            <b>0</b>
          </div>
        </div>

        <div /**socvchar */
          css={{
            display: "flex",
          }}
        >
          <div
            css={{
              width: "40%",
              borderRadius: "12, 0, 0, 0",
            }}
          >
            Սոցիալական վճար
          </div>
          <div
            css={{
              width: "60%",
              borderRadius: "0, 12, 0, 0",
            }}
          >
            <b>0</b>
          </div>
        </div>

        <div /**droshmanishayin vchar */
          css={{
            display: "flex",
          }}
        >
          <div
            css={{
              width: "40%",
              borderRadius: "12, 0, 0, 0",
            }}
          >
            Դրոշմանիշային վճար
          </div>
          <div
            css={{
              width: "60%",
              borderRadius: "0, 12, 0, 0",
            }}
          >
            <b>0</b>
          </div>
        </div>

        <div /**ashxatavardz */
          css={{
            display: "flex",
          }}
        >
          <div
            css={{
              width: "40%",
              borderRadius: "12, 0, 0, 0",
            }}
          >
            Աշխատավարձ
          </div>
          <div
            css={{
              width: "60%",
              borderRadius: "0, 12, 0, 0",
            }}
          >
            <b>0</b>
          </div>
        </div>
      </section>
      <Button
          variant={"contained"}
          color={'secondary'}
      >Հաշվել աշխատավարձը
      </Button>
    </>
  );
}
