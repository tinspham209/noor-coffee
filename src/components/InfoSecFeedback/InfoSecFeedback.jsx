import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Container, Button } from "../../GlobalStyles";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	Form,
	FormLabel,
	FormSelect,
	FormSelectOption,
	FormTextarea,
} from "./InfoSecFeedback.elements";

import { FaStar } from "react-icons/fa";

import { firebase } from "../../lib/firebase";
import { getUUID } from "../../utils";

const InfoSecFeedback = ({
	lightBg,
	imgStart,
	lightText,
	headline,
	lightTextDesc,
	description,
	buttonLabel,
	img,
	alt,
	start,
}) => {
	const [category, setCategory] = useState("");
	const [review, setReview] = useState("");
	const [star, setStar] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();

		firebase
			.firestore()
			.collection("feedback")
			.add({
				id: getUUID(),
				dateCreate: new Date(),
				star: star,
				category: category,
				review: review,
			})
			.then(function () {
				alert("Cảm ơn bạn đã góp ý.");
				window.location = "/";
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	};

	const isInvalid = category === "" || review === "" || star === "";

	const ratingChanged = (newRating) => {
		setStar(newRating);
	};

	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Form>
									<FormLabel htmlFor="">Độ hài lòng:</FormLabel>
									<ReactStars
										count={5}
										onChange={ratingChanged}
										size={60}
										isHalf={false}
										emptyIcon={<FaStar />}
										fullIcon={<FaStar />}
										activeColor="#ffd700"
										style={{
											marginBottom: "20px",
										}}
									/>
									<FormLabel htmlFor="">Danh mục góp ý:</FormLabel>
									<FormSelect
										value={category}
										onChange={({ target }) => setCategory(target.value)}
									>
										<FormSelectOption>Chọn danh mục</FormSelectOption>
										<FormSelectOption>Không gian</FormSelectOption>
										<FormSelectOption>Âm thanh</FormSelectOption>
										<FormSelectOption>Nhân viên</FormSelectOption>
										<FormSelectOption>Đồ uống</FormSelectOption>
										<FormSelectOption>Thức ăn</FormSelectOption>
										<FormSelectOption>Thời gian phục vụ</FormSelectOption>
										<FormSelectOption>Wifi</FormSelectOption>
									</FormSelect>
									<FormLabel htmlFor="">Chia sẻ ý kiến của bạn: </FormLabel>
									<FormTextarea
										type="text"
										value={review}
										onChange={({ target }) => setReview(target.value)}
									></FormTextarea>
									<Button
										disabled={isInvalid}
										type="submit"
										onClick={handleFormSubmit}
									>
										{buttonLabel}
									</Button>
								</Form>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSecFeedback;
