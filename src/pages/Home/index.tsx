import { useTheme } from "styled-components";
import { AllClearIcon } from "../../assets/AllClearIcon";

import { SunGradientIcon } from "../../assets/SunGradientIcon";
import { Button } from "../../components/Button";
import {
  ColumnsGroupButtons,
  Container,
  GroupButtonsDefault,
  GroupButtonsThreeColumns,
  RowsGroupButtons,
  WrapperButtons,
  WrapperPronpt,
  History,
} from "./styles";
import {
  Divide,
  X,
  Minus,
  Plus,
  Equals,
  ClockCounterClockwise,
  ArrowLeft,
} from "@phosphor-icons/react";
import { useChangeTheme } from "../../hooks/ChangeTheme";
import { useEffect, useRef, useState } from "react";
import { MoonGradientIcon } from "../../assets/MoonGradientIcon";

type TypeOperator = "*" | "/" | "+" | "-" | "=";

export function Home() {
  const { COLORS } = useTheme();
  const { getTheme, onChangeTheme } = useChangeTheme();

  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [lineOperation, setLineOperation] = useState<string[]>([]);
  // const [numbersOperation, setNumbersOperation] = useState<number[]>([])

  function handleChangeTheme() {
    if (getTheme === "light") {
      onChangeTheme("dark");
    } else {
      onChangeTheme("light");
    }
  }

  function handleDeleteCharacter() {
    setInput(input.slice(0, -1));
  }

  function handleDefineNumbers(key: string) {
    if (key.match(/\d+/) || key.match(/[,]/)) {
      setInput(input + key);
    } else if (key.match(/[\'+\=\/\*\-]/) || key === "Enter") {
      if (key === "=" || key === "Enter") {
        handleFinishOperation();
      } else {
        handleDefineOperator(key as TypeOperator);
      }
    } else if (key === "Backspace") {
      handleDeleteCharacter();
    } else {
      return;
    }
  }

  function handleDefineOperator(operator: TypeOperator) {
    setHistory([input, operator]);
    setLineOperation([...lineOperation, input, operator]);
    setInput("");
  }

  function handleFinishOperation() {
    const operation = lineOperation.reduce(
      (prev, his) => prev + his.replace(/,/g, "."),
      ""
    );

    const result = eval(operation + input.replace(/,/g, "."));
    setHistory([
      ...history,
      input.replace(/,/g, "."),
      "=",
      `${result}`.replace(".", ","),
    ]);

    setInput(`${result}`.replace(".", ","));
    setLineOperation([]);
  }

  function handleClearAll() {
    setHistory([]);
    setInput("");
    setLineOperation([]);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <Container>
      <History>
        <span>{history.length > 0 && history.map((x) => ` ${x} `)}</span>
        <ClockCounterClockwise color={COLORS.GRAY_400} size={22} />
      </History>

      <WrapperPronpt>
        <input
          ref={inputRef}
          autoFocus
          type="text"
          value={input}
          onChange={() => {}}
          onKeyUp={(e) => handleDefineNumbers(e.key)}
        />
      </WrapperPronpt>

      <WrapperButtons>
        <GroupButtonsDefault>
          <Button
            variant="OUTLINED"
            icon={
              getTheme === "dark" ? <SunGradientIcon /> : <MoonGradientIcon />
            }
            onClick={handleChangeTheme}
          />

          <Button
            variant="CONTAINED"
            icon={<ArrowLeft />}
            onClick={handleDeleteCharacter}
          />
          <Button
            variant="CONTAINED"
            icon={<Divide />}
            onClick={() => handleDefineOperator("/")}
          />
          <Button
            variant="CONTAINED"
            icon={<X />}
            onClick={() => handleDefineOperator("*")}
          />
        </GroupButtonsDefault>

        <GroupButtonsDefault>
          <Button
            variant="TEXT"
            text="7"
            onClick={() => handleDefineNumbers("7")}
          />
          <Button
            variant="TEXT"
            text="8"
            onClick={() => handleDefineNumbers("8")}
          />
          <Button
            variant="TEXT"
            text="9"
            onClick={() => handleDefineNumbers("9")}
          />
          <Button
            variant="CONTAINED"
            icon={<Minus />}
            onClick={() => handleDefineOperator("-")}
          />
        </GroupButtonsDefault>

        <GroupButtonsDefault>
          <Button
            variant="TEXT"
            text="4"
            onClick={() => handleDefineNumbers("4")}
          />
          <Button
            variant="TEXT"
            text="5"
            onClick={() => handleDefineNumbers("5")}
          />
          <Button
            variant="TEXT"
            text="6"
            onClick={() => handleDefineNumbers("6")}
          />
          <Button
            variant="CONTAINED"
            icon={<Plus />}
            onClick={() => handleDefineOperator("+")}
          />
        </GroupButtonsDefault>

        <ColumnsGroupButtons>
          <RowsGroupButtons>
            <GroupButtonsThreeColumns>
              <Button
                variant="TEXT"
                text="1"
                onClick={() => handleDefineNumbers("1")}
              />
              <Button
                variant="TEXT"
                text="2"
                onClick={() => handleDefineNumbers("2")}
              />
              <Button
                variant="TEXT"
                text="3"
                onClick={() => handleDefineNumbers("3")}
              />
            </GroupButtonsThreeColumns>
            <GroupButtonsThreeColumns>
              <Button
                variant="TEXT"
                icon={<AllClearIcon />}
                onClick={handleClearAll}
              />
              <Button
                variant="TEXT"
                text="0"
                onClick={() => handleDefineNumbers("0")}
              />
              <Button
                variant="TEXT"
                text=","
                onClick={() => handleDefineNumbers(",")}
              />
            </GroupButtonsThreeColumns>
          </RowsGroupButtons>

          <Button
            variant="HIGHLIGHT"
            icon={<Equals />}
            onClick={handleFinishOperation}
          />
        </ColumnsGroupButtons>
      </WrapperButtons>
    </Container>
  );
}
