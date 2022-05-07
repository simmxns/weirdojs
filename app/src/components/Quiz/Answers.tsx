import GlassLayout from "../GlassLayout";
import * as styles from '@/styles/components/Quiz.module.sass';
import AnswerButton from "../AnswerButton";
import { FunctionComponent } from "react";

const Answers: FunctionComponent<PropTypes> = function ({ obj, index, callback }) { return (
        <GlassLayout>
          <div className={styles.answersGlass}>
            <h6 className={styles.answersTitle}>Select an anwser</h6>
            <div className={styles.answersButtons}>
              <AnswerButton
                answer={obj[index].answers[0]}
                keyType="q"
                callback={callback}
              />
              <AnswerButton
                answer={obj[index].answers[1]}
                keyType="w"
                callback={callback}
              />
              <AnswerButton
                answer={obj[index].answers[2]}
                keyType="e"
                callback={callback}
              />
              <AnswerButton
                answer={obj[index].answers[3]}
                keyType="r"
                callback={callback}
              />
            </div>
          </div>
        </GlassLayout>

)}

export default Answers

interface PropTypes {
	obj: any[]
	index: number
	callback: () => void
}
